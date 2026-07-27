import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-chile-servers');
}

export default function XanteriaChileServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-chile-servers" />;
}
