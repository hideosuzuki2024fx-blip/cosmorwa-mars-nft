import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
import numpy as np
from matplotlib.patches import Rectangle
import seaborn as sns

# Set style
plt.style.use('dark_background')
sns.set_palette("husl")

# Create figure directory
import os
os.makedirs('/home/ubuntu/cosmorwa_platform/client/public/images/investor-visuals', exist_ok=True)

# ============================================================================
# Chart 1: Market Size Opportunity
# ============================================================================
fig, ax = plt.subplots(figsize=(12, 7))

categories = ['Space Economy\n(2030)', 'NFT Market\n(2026)', 'Mars-related\nSpending', 'Web3 Users\nWTP*']
values = [1000, 120, 1, 500]  # In billions except Web3 (in millions)
colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A']

# Create bars
bars = ax.bar(categories, [1000, 120, 1, 500], color=colors, alpha=0.8, edgecolor='white', linewidth=2)

# Add value labels
labels = ['$1T+', '$120B', '$1B+/year', '100M+']
for bar, label in zip(bars, labels):
    height = bar.get_height()
    ax.text(bar.get_x() + bar.get_width()/2., height,
            label, ha='center', va='bottom', fontsize=16, fontweight='bold', color='white')

ax.set_ylabel('Market Size', fontsize=14, fontweight='bold')
ax.set_title('Mars NFT Land: Massive Market Opportunity', fontsize=18, fontweight='bold', pad=20)
ax.set_ylim(0, 1100)
ax.grid(axis='y', alpha=0.3)
ax.set_axisbelow(True)

# Add footnote
fig.text(0.5, 0.02, '*WTP = Willingness to Pay (Mars enthusiasts)', 
         ha='center', fontsize=10, style='italic', color='gray')

plt.tight_layout()
plt.savefig('/home/ubuntu/cosmorwa_platform/client/public/images/investor-visuals/01_market_size.png', 
            dpi=300, bbox_inches='tight', facecolor='#0a0e27')
print("✅ Chart 1: Market Size - Generated")
plt.close()

# ============================================================================
# Chart 2: Financial Projections (Revenue & Users)
# ============================================================================
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(14, 6))

# Revenue projection
years = ['Year 1', 'Year 2', 'Year 3']
revenue = [105, 310, 370]  # Net revenue in millions
colors_revenue = ['#FF6B6B', '#4ECDC4', '#45B7D1']

bars1 = ax1.bar(years, revenue, color=colors_revenue, alpha=0.8, edgecolor='white', linewidth=2)
for bar in bars1:
    height = bar.get_height()
    ax1.text(bar.get_x() + bar.get_width()/2., height,
            f'${int(height)}M', ha='center', va='bottom', fontsize=14, fontweight='bold', color='white')

ax1.set_ylabel('Net Revenue ($M)', fontsize=12, fontweight='bold')
ax1.set_title('Net Revenue Projection', fontsize=14, fontweight='bold')
ax1.set_ylim(0, 450)
ax1.grid(axis='y', alpha=0.3)
ax1.set_axisbelow(True)

# User growth
users = [100, 500, 1000]  # In thousands
bars2 = ax2.bar(years, users, color=colors_revenue, alpha=0.8, edgecolor='white', linewidth=2)
for bar in bars2:
    height = bar.get_height()
    label = f'{int(height)}K' if height < 1000 else f'{int(height/1000)}M'
    ax2.text(bar.get_x() + bar.get_width()/2., height,
            label, ha='center', va='bottom', fontsize=14, fontweight='bold', color='white')

ax2.set_ylabel('Active Users', fontsize=12, fontweight='bold')
ax2.set_title('User Growth Projection', fontsize=14, fontweight='bold')
ax2.set_ylim(0, 1200)
ax2.grid(axis='y', alpha=0.3)
ax2.set_axisbelow(True)

plt.suptitle('Financial & User Growth Projections (3-Year)', fontsize=16, fontweight='bold', y=1.02)
plt.tight_layout()
plt.savefig('/home/ubuntu/cosmorwa_platform/client/public/images/investor-visuals/02_financial_projections.png',
            dpi=300, bbox_inches='tight', facecolor='#0a0e27')
print("✅ Chart 2: Financial Projections - Generated")
plt.close()

# ============================================================================
# Chart 3: Revenue Streams by Year
# ============================================================================
fig, ax = plt.subplots(figsize=(12, 7))

years = ['Year 1', 'Year 2', 'Year 3']
primary_sales = [350, 200, 100]
royalties = [0, 80, 150]
data_licensing = [0, 50, 80]
subscriptions = [0, 20, 50]
marketplace = [0, 0, 50]

x = np.arange(len(years))
width = 0.6

p1 = ax.bar(x, primary_sales, width, label='Primary NFT Sales', color='#FF6B6B', alpha=0.8, edgecolor='white', linewidth=1.5)
p2 = ax.bar(x, royalties, width, bottom=primary_sales, label='Secondary Market Royalties', color='#4ECDC4', alpha=0.8, edgecolor='white', linewidth=1.5)
p3 = ax.bar(x, data_licensing, width, bottom=np.array(primary_sales)+np.array(royalties), label='Data Licensing', color='#45B7D1', alpha=0.8, edgecolor='white', linewidth=1.5)
p4 = ax.bar(x, subscriptions, width, bottom=np.array(primary_sales)+np.array(royalties)+np.array(data_licensing), label='Premium Subscriptions', color='#FFA07A', alpha=0.8, edgecolor='white', linewidth=1.5)
p5 = ax.bar(x, marketplace, width, bottom=np.array(primary_sales)+np.array(royalties)+np.array(data_licensing)+np.array(subscriptions), label='Marketplace Fees', color='#98D8C8', alpha=0.8, edgecolor='white', linewidth=1.5)

# Add total labels
totals = [350, 350, 430]
for i, total in enumerate(totals):
    ax.text(i, total + 20, f'${total}M', ha='center', va='bottom', fontsize=14, fontweight='bold', color='white')

ax.set_ylabel('Revenue ($M)', fontsize=12, fontweight='bold')
ax.set_title('Revenue Streams by Year (Gross Revenue)', fontsize=16, fontweight='bold')
ax.set_xticks(x)
ax.set_xticklabels(years)
ax.legend(loc='upper left', fontsize=10, framealpha=0.9)
ax.set_ylim(0, 500)
ax.grid(axis='y', alpha=0.3)
ax.set_axisbelow(True)

plt.tight_layout()
plt.savefig('/home/ubuntu/cosmorwa_platform/client/public/images/investor-visuals/03_revenue_streams.png',
            dpi=300, bbox_inches='tight', facecolor='#0a0e27')
print("✅ Chart 3: Revenue Streams - Generated")
plt.close()

# ============================================================================
# Chart 4: Investment Returns Scenarios
# ============================================================================
fig, ax = plt.subplots(figsize=(12, 7))

scenarios = ['Conservative\nCase', 'Base\nCase', 'Optimistic\nCase']
returns = [21.5, 38.7, 63]
colors_returns = ['#FFD93D', '#6BCB77', '#4D96FF']

bars = ax.bar(scenarios, returns, color=colors_returns, alpha=0.8, edgecolor='white', linewidth=2, width=0.6)

for bar in bars:
    height = bar.get_height()
    ax.text(bar.get_x() + bar.get_width()/2., height,
            f'{height:.1f}x', ha='center', va='bottom', fontsize=16, fontweight='bold', color='white')

ax.set_ylabel('Return Multiple (3-Year Hold)', fontsize=12, fontweight='bold')
ax.set_title('Investment Return Scenarios', fontsize=16, fontweight='bold')
ax.set_ylim(0, 75)
ax.axhline(y=10, color='gray', linestyle='--', alpha=0.5, linewidth=1)
ax.text(2.5, 10.5, '10x (Venture Benchmark)', fontsize=9, color='gray', style='italic')
ax.grid(axis='y', alpha=0.3)
ax.set_axisbelow(True)

plt.tight_layout()
plt.savefig('/home/ubuntu/cosmorwa_platform/client/public/images/investor-visuals/04_return_scenarios.png',
            dpi=300, bbox_inches='tight', facecolor='#0a0e27')
print("✅ Chart 4: Return Scenarios - Generated")
plt.close()

# ============================================================================
# Chart 5: Use of Funds Pie Chart
# ============================================================================
fig, ax = plt.subplots(figsize=(10, 8))

sizes = [40, 30, 20, 10]
labels = ['Product Development\n(40%)\n$8M', 'Go-to-Market\n(30%)\n$6M', 'Operations\n(20%)\n$4M', 'Contingency\n(10%)\n$2M']
colors_pie = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A']
explode = (0.05, 0.05, 0.05, 0.05)

wedges, texts, autotexts = ax.pie(sizes, labels=labels, colors=colors_pie, autopct='%1.0f%%',
                                    startangle=90, explode=explode, textprops={'fontsize': 11, 'weight': 'bold'},
                                    wedgeprops={'edgecolor': 'white', 'linewidth': 2})

for autotext in autotexts:
    autotext.set_color('white')
    autotext.set_fontsize(12)
    autotext.set_weight('bold')

ax.set_title('Use of Funds: $20M Seed Round', fontsize=16, fontweight='bold', pad=20)

plt.tight_layout()
plt.savefig('/home/ubuntu/cosmorwa_platform/client/public/images/investor-visuals/05_use_of_funds.png',
            dpi=300, bbox_inches='tight', facecolor='#0a0e27')
print("✅ Chart 5: Use of Funds - Generated")
plt.close()

# ============================================================================
# Chart 6: Risk Matrix
# ============================================================================
fig, ax = plt.subplots(figsize=(12, 8))

# Risk data: (probability %, impact %, size, label, color)
risks = [
    (30, 80, 500, 'Regulatory\nUncertainty', '#FF6B6B'),
    (10, 85, 500, 'Technical\nFailure', '#FF8C42'),
    (40, 60, 500, 'SpaceX\nDelays', '#FFD93D'),
    (15, 75, 500, 'Market\nAdoption', '#6BCB77'),
    (70, 50, 500, 'Competitive\nEntry', '#4D96FF'),
]

for prob, impact, size, label, color in risks:
    ax.scatter(prob, impact, s=size, alpha=0.6, color=color, edgecolors='white', linewidth=2)
    ax.annotate(label, (prob, impact), fontsize=10, fontweight='bold', 
                ha='center', va='center', color='white')

# Add quadrant lines
ax.axhline(y=50, color='gray', linestyle='--', alpha=0.5, linewidth=1)
ax.axvline(x=50, color='gray', linestyle='--', alpha=0.5, linewidth=1)

# Add quadrant labels
ax.text(25, 90, 'HIGH IMPACT\nLOW PROBABILITY', fontsize=10, alpha=0.5, ha='center', style='italic', color='gray')
ax.text(75, 90, 'HIGH IMPACT\nHIGH PROBABILITY', fontsize=10, alpha=0.5, ha='center', style='italic', color='gray')
ax.text(25, 10, 'LOW IMPACT\nLOW PROBABILITY', fontsize=10, alpha=0.5, ha='center', style='italic', color='gray')
ax.text(75, 10, 'LOW IMPACT\nHIGH PROBABILITY', fontsize=10, alpha=0.5, ha='center', style='italic', color='gray')

ax.set_xlabel('Probability (%)', fontsize=12, fontweight='bold')
ax.set_ylabel('Impact (%)', fontsize=12, fontweight='bold')
ax.set_title('Risk Analysis Matrix', fontsize=16, fontweight='bold')
ax.set_xlim(0, 100)
ax.set_ylim(0, 100)
ax.grid(True, alpha=0.2)
ax.set_axisbelow(True)

plt.tight_layout()
plt.savefig('/home/ubuntu/cosmorwa_platform/client/public/images/investor-visuals/06_risk_matrix.png',
            dpi=300, bbox_inches='tight', facecolor='#0a0e27')
print("✅ Chart 6: Risk Matrix - Generated")
plt.close()

# ============================================================================
# Chart 7: Competitive Positioning
# ============================================================================
fig, ax = plt.subplots(figsize=(12, 8))

# Competitive factors
factors = ['Real Mars\nData', 'Community\nSize', 'Revenue\nModel', 'Launch\nTimeline', 'Team\nExperience']
mars_nft = [10, 10, 9, 10, 9]
competitor_a = [2, 3, 4, 5, 6]
competitor_b = [3, 4, 3, 4, 5]

x = np.arange(len(factors))
width = 0.25

bars1 = ax.bar(x - width, mars_nft, width, label='Mars NFT Land', color='#FF6B6B', alpha=0.8, edgecolor='white', linewidth=1.5)
bars2 = ax.bar(x, competitor_a, width, label='Competitor A', color='#4ECDC4', alpha=0.6, edgecolor='white', linewidth=1.5)
bars3 = ax.bar(x + width, competitor_b, width, label='Competitor B', color='#45B7D1', alpha=0.6, edgecolor='white', linewidth=1.5)

ax.set_ylabel('Score (0-10)', fontsize=12, fontweight='bold')
ax.set_title('Competitive Positioning Analysis', fontsize=16, fontweight='bold')
ax.set_xticks(x)
ax.set_xticklabels(factors, fontsize=11)
ax.legend(fontsize=11, loc='upper left', framealpha=0.9)
ax.set_ylim(0, 12)
ax.grid(axis='y', alpha=0.3)
ax.set_axisbelow(True)

plt.tight_layout()
plt.savefig('/home/ubuntu/cosmorwa_platform/client/public/images/investor-visuals/07_competitive_positioning.png',
            dpi=300, bbox_inches='tight', facecolor='#0a0e27')
print("✅ Chart 7: Competitive Positioning - Generated")
plt.close()

# ============================================================================
# Chart 8: 3-Phase Roadmap Timeline
# ============================================================================
fig, ax = plt.subplots(figsize=(14, 6))

phases = ['Phase 1:\nTokenization', 'Phase 2:\nPrediction', 'Phase 3:\nDiscovery']
start_months = [1, 4, 10]
durations = [3, 6, 12]
colors_timeline = ['#FF6B6B', '#4ECDC4', '#45B7D1']

for i, (phase, start, duration, color) in enumerate(zip(phases, start_months, durations, colors_timeline)):
    ax.barh(i, duration, left=start, height=0.6, color=color, alpha=0.8, edgecolor='white', linewidth=2)
    
    # Add phase label
    ax.text(start + duration/2, i, phase, ha='center', va='center', 
            fontsize=12, fontweight='bold', color='white')
    
    # Add timeline markers
    ax.text(start - 0.5, i, f'M{start}', ha='right', va='center', fontsize=9, color='gray')

ax.set_yticks([])
ax.set_xlabel('Timeline (Months)', fontsize=12, fontweight='bold')
ax.set_title('3-Phase Implementation Roadmap', fontsize=16, fontweight='bold')
ax.set_xlim(0, 24)
ax.grid(axis='x', alpha=0.3)
ax.set_axisbelow(True)

# Add milestones
milestones = [
    (1, 'Q1 2026\nDev Start'),
    (4, 'Q2 2026\nLaunch'),
    (10, 'Q3 2026\nExpand'),
    (22, 'Q4 2026\nScale'),
]

for month, label in milestones:
    ax.axvline(x=month, color='gray', linestyle=':', alpha=0.5, linewidth=1)
    ax.text(month, -0.8, label, ha='center', fontsize=9, color='gray', style='italic')

plt.tight_layout()
plt.savefig('/home/ubuntu/cosmorwa_platform/client/public/images/investor-visuals/08_roadmap_timeline.png',
            dpi=300, bbox_inches='tight', facecolor='#0a0e27')
print("✅ Chart 8: Roadmap Timeline - Generated")
plt.close()

print("\n" + "="*60)
print("✅ ALL INVESTOR VISUALS GENERATED SUCCESSFULLY")
print("="*60)
print("\nGenerated files:")
print("  1. 01_market_size.png")
print("  2. 02_financial_projections.png")
print("  3. 03_revenue_streams.png")
print("  4. 04_return_scenarios.png")
print("  5. 05_use_of_funds.png")
print("  6. 06_risk_matrix.png")
print("  7. 07_competitive_positioning.png")
print("  8. 08_roadmap_timeline.png")
print("\nLocation: /home/ubuntu/cosmorwa_platform/client/public/images/investor-visuals/")
