import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-similar-servers');
}

export default function XanteriaSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-similar-servers" />;
}
