import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-download');
}

export default function ZezeniaOnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-download" />;
}
