import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-trailer');
}

export default function ZezeniaOnlineTrailerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-trailer" />;
}
