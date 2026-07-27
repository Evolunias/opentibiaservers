import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-screenshots');
}

export default function ZezeniaOnlineScreenshotsKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-screenshots" />;
}
