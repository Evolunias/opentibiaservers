import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-chile-server');
}

export default function XanteriaChileServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-chile-server" />;
}
