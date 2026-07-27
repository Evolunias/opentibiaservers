import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-similar-servers');
}

export default function ZezeniaOnlineSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-similar-servers" />;
}
