// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

/**
 * @title MarsNFT
 * @dev Tokenized Mars Land NFT Contract
 * 
 * This contract represents ownership of Mars land parcels as NFTs.
 * Each NFT corresponds to a specific grid location on Mars with geological data.
 */

contract MarsNFT is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    
    Counters.Counter private _tokenIdCounter;
    
    // Mars parcel data structure
    struct MarsParcels {
        uint256 tokenId;
        string coordinates;      // "45.2N,112.3E"
        uint256 elevation;       // meters
        string geology;          // rock type
        uint256 waterIceProbability; // 0-100
        uint256 scientificValue; // 1-10
        uint256 purchasePrice;   // in wei
        uint256 discoveryValue;  // dynamic value based on events
        bool hasDiscoveryEvent;
        string discoveryEventType;
    }
    
    // Mapping from tokenId to Mars parcel data
    mapping(uint256 => MarsParcels) public marsParcels;
    
    // Mapping from coordinates to tokenId (for lookup)
    mapping(string => uint256) public coordinatesToTokenId;
    
    // Event tracking
    event MarsParcelMinted(
        uint256 indexed tokenId,
        address indexed owner,
        string coordinates,
        uint256 purchasePrice
    );
    
    event DiscoveryEventTriggered(
        uint256 indexed tokenId,
        string eventType,
        uint256 newValue
    );
    
    event ParcelTraded(
        uint256 indexed tokenId,
        address indexed from,
        address indexed to,
        uint256 price
    );
    
    constructor() ERC721("Mars NFT Land", "MARS") {}
    
    /**
     * @dev Mint a new Mars land parcel NFT
     * @param to Address to mint to
     * @param coordinates Mars coordinates (e.g., "45.2N,112.3E")
     * @param elevation Elevation in meters
     * @param geology Rock type/geology
     * @param waterIceProbability Water ice probability (0-100)
     * @param scientificValue Scientific value rating (1-10)
     * @param purchasePrice Price in wei
     * @param uri Metadata URI
     */
    function mintMarsParcels(
        address to,
        string memory coordinates,
        uint256 elevation,
        string memory geology,
        uint256 waterIceProbability,
        uint256 scientificValue,
        uint256 purchasePrice,
        string memory uri
    ) public onlyOwner returns (uint256) {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        
        marsParcels[tokenId] = MarsParcels({
            tokenId: tokenId,
            coordinates: coordinates,
            elevation: elevation,
            geology: geology,
            waterIceProbability: waterIceProbability,
            scientificValue: scientificValue,
            purchasePrice: purchasePrice,
            discoveryValue: purchasePrice,
            hasDiscoveryEvent: false,
            discoveryEventType: ""
        });
        
        coordinatesToTokenId[coordinates] = tokenId;
        
        emit MarsParcelMinted(tokenId, to, coordinates, purchasePrice);
        
        return tokenId;
    }
    
    /**
     * @dev Trigger a discovery event for a Mars parcel
     * @param tokenId Token ID of the parcel
     * @param eventType Type of discovery ("rover_landing", "sample_collection", "water_ice_detected", etc.)
     * @param valueMultiplier Multiplier for new value (e.g., 150 = 1.5x increase)
     */
    function triggerDiscoveryEvent(
        uint256 tokenId,
        string memory eventType,
        uint256 valueMultiplier
    ) public onlyOwner {
        require(_ownerOf(tokenId) != address(0), "Token does not exist");
        
        MarsParcels storage parcel = marsParcels[tokenId];
        uint256 oldValue = parcel.discoveryValue;
        uint256 newValue = (oldValue * valueMultiplier) / 100;
        
        parcel.hasDiscoveryEvent = true;
        parcel.discoveryEventType = eventType;
        parcel.discoveryValue = newValue;
        
        emit DiscoveryEventTriggered(tokenId, eventType, newValue);
    }
    
    /**
     * @dev Get Mars parcel data
     * @param tokenId Token ID
     * @return Parcel data
     */
    function getMarsParcels(uint256 tokenId) 
        public 
        view 
        returns (MarsParcels memory) 
    {
        require(_ownerOf(tokenId) != address(0), "Token does not exist");
        return marsParcels[tokenId];
    }
    
    /**
     * @dev Get token ID by coordinates
     * @param coordinates Mars coordinates
     * @return Token ID
     */
    function getTokenByCoordinates(string memory coordinates) 
        public 
        view 
        returns (uint256) 
    {
        return coordinatesToTokenId[coordinates];
    }
    
    /**
     * @dev Get current discovery value of a parcel
     * @param tokenId Token ID
     * @return Current discovery value
     */
    function getDiscoveryValue(uint256 tokenId) 
        public 
        view 
        returns (uint256) 
    {
        require(_ownerOf(tokenId) != address(0), "Token does not exist");
        return marsParcels[tokenId].discoveryValue;
    }
    
    /**
     * @dev Get total supply of Mars NFTs
     * @return Total number of minted NFTs
     */
    function getTotalSupply() public view returns (uint256) {
        return _tokenIdCounter.current();
    }
    
    // Required overrides for ERC721URIStorage
    function _burn(uint256 tokenId) 
        internal 
        override(ERC721, ERC721URIStorage) 
    {
        super._burn(tokenId);
    }
    
    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
    
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
