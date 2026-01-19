#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * ホワイトペーパーをMarkdownからPDFに変換するスクリプト
 * 使用方法: node generate-whitepaper-pdf.mjs
 */

async function generatePDF() {
  try {
    // manus-md-to-pdf ユーティリティを使用してPDFを生成
    const { execSync } = await import('child_process');
    
    const inputFile = path.join(__dirname, 'whitepaper.md');
    const outputFile = path.join(__dirname, 'client/public/CosmoRWA-Whitepaper.pdf');
    
    // 出力ディレクトリが存在することを確認
    const outputDir = path.dirname(outputFile);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }
    
    console.log('📄 ホワイトペーパーをPDFに変換中...');
    console.log(`入力: ${inputFile}`);
    console.log(`出力: ${outputFile}`);
    
    // manus-md-to-pdf コマンドを実行
    execSync(`manus-md-to-pdf "${inputFile}" "${outputFile}"`, {
      stdio: 'inherit',
      cwd: __dirname
    });
    
    console.log('✅ PDF生成完了！');
    console.log(`📍 ファイルパス: ${outputFile}`);
    
    // ファイルサイズを表示
    const stats = fs.statSync(outputFile);
    const fileSizeInKB = (stats.size / 1024).toFixed(2);
    console.log(`📊 ファイルサイズ: ${fileSizeInKB} KB`);
    
  } catch (error) {
    console.error('❌ エラーが発生しました:', error.message);
    process.exit(1);
  }
}

generatePDF();
