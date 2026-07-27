import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-alternatives');
}

export default function ZezeniaOnlineAlternativesKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-alternatives" />;
}
