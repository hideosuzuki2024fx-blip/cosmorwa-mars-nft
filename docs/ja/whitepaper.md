# SpaceX採用向けMars Reference Gridホワイトペーパー

**Version:** 2.0（SpaceX採用向けドラフト）

## Executive Summary
本ホワイトペーパーは、SpaceXが必要な部分だけ採用できる「Mars Reference Grid（火星参照グリッド）」の提案です。中核は中立的で、所有権や投機とは無関係な座標ラベル体系です。NFTや市場要素は必須ではなく、Layer 1のみで十分に価値が成立します。Layer 2とLayer 3は任意であり、SpaceXの判断で採用・不採用を選択できます。

過去の月面土地販売の失敗は、信頼できる参照アンカーが存在しなかったことに起因します。本提案はその反省を踏まえ、SpaceXという現実の運用アンカーに紐づく参照標準として設計されています。土地の売買ではなく、科学・工学・対外説明に役立つ標準化の価値を提供します。

## 1. Why Previous Lunar Land Schemes Failed
過去の「月面土地販売」は、参照アンカーがなく、座標の主張が信頼できる運用に結びつきませんでした。信頼できる機関やミッションデータに接続されていないため、座標は単なる物語に留まりました。

また、所有権や領有の誤解を誘発し、Outer Space Treaty（宇宙条約）との関係が不透明でした。土地所有を連想させるモデルは、規制リスクと評判リスクを同時に高めます。

## 2. Why Now Is Different
現在は、運用的な基準点が存在します。SpaceXは火星輸送と着陸の中核的なプレーヤーであり、その運用現実が参照アンカーになります。これは法的所有権の主張ではなく、運用上の基準点としての現実です。

SpaceXが参照グリッドを運用または公開すれば、外部の研究者やツール開発者がその基準に合わせることができます。これにより、SpaceXはミッション運用と外部協力を切り分けたまま、標準化の恩恵を得られます。

## 3. Design Goals
1. **中立性**：参照グリッドは座標標準であり、所有権の台帳ではない。
2. **モジュール性**：Layer 1のみ採用しても価値が成立。
3. **検証優先**：外部の独立計算と検証を誘発。
4. **運用明確性**：位置・データの参照を明確化。

## 4. Architecture Overview (3-Layer Model)
### Layer 1（Minimum / Must-have）：Official Mars Reference Grid
Layer 1は唯一必須の層で、座標スキーマとReference IDsの一覧を定義します。**所有権とは無関係**であり、NFTやトークンは不要です。

**Layer 1単体で成立する理由**：
- 参照の一貫性を確保できる。
- 複数チーム間の位置解釈のズレを減らせる。
- 外部研究者がデータを整備し、SpaceXが必要な成果のみ選別できる。

### Layer 2（Optional / Core Value）：Contribution & Verification
Layer 2は外部貢献と検証の設計です。上から割り当てるのではなく、独自の分析を促し、SpaceXが必要なものだけ採用できるようにします。
- 提出基準（データ、方法、出典）
- 再現性要件
- 複数ソース検証

### Layer 3（Optional / Appendix-only）：Monetization
Layer 3は付録の任意要素で、助成、スポンサー、データライセンスなどの資金化オプションです。SpaceXの採用に必須ではありません。

## 5. Layer 1 Specification (Reference Grid)
Reference Gridは以下を定義します。
- 投影法とエポック
- 解像度階層（例：10km、1km、100m）
- Reference ID形式と検証ルール
- 参照メタデータ（画像出典、時刻、バージョン）

## 6. Layer 2 Specification (Contribution & Verification)
軽量な検証パイプラインを構築します。
- 提出バンドル（データ、手法、ツール、出典）
- 再現性チェック
- 競合解析の解決プロセス

SpaceXは基準に満たない成果を採用しないことが前提です。

## 7. Benefits to SpaceX Without Commercialization
- **運用の明確化**：参照の混乱を削減。
- **協業速度の向上**：外部成果が評価しやすい。
- **対外説明の一貫性**：所有権を伴わない説明が可能。
- **統合の容易さ**：将来のデータ統合コストが低い。

## 8. Risk and Misinterpretation Management
主要なリスクは、土地販売や投機に誤読されることです。対策は以下の通りです。
- Reference IDsは**所有権ではない**と明記。
- “parcel”や“real estate”などの語彙を避ける。
- 収益化は付録に限定し、本文から排除。

## 9. Implementation Approach (Phase 0–2)
- **Phase 0: Reference-only** — Reference Gridを公開し、内部で有効性を検証。効果がなければ停止。
- **Phase 1: Contribution & Verification** — 外部提出を受け入れ、検証済みのみ採用。
- **Phase 2: Scaled Integration** — 受理したデータを業務または公開資料に統合。

## 10. Why SpaceX Is the Right Anchor
SpaceXに求めるのは市場創設ではなく、参照標準の運用または承認です。火星にハードウェアを届ける現実が、過去の月面土地販売には無かった信頼の基盤になります。

## 11. Appendix: Optional Monetization (Not Required)
SpaceXが希望する場合の任意の資金化オプション：
- 研究データやダッシュボードのスポンサー
- 派生データの限定ライセンス
- 外部組織へのアドバイザリー

## Conclusion
本提案は最小限で実用的な参照標準の設計です。過去の月面土地商法の失敗を踏まえ、所有権や投機を排除し、SpaceXの運用現実を参照アンカーとしています。Layer 1は単独で価値が成立し、Layer 2とLayer 3は任意です。SpaceXは必要な部分だけを採用できます。
