import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-wars');
}

export default function ZezeniaOnlineWarsKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-wars" />;
}
