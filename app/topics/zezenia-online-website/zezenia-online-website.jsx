import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-website');
}

export default function ZezeniaOnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-website" />;
}
