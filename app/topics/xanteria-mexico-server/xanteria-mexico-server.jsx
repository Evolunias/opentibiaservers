import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-mexico-server');
}

export default function XanteriaMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-mexico-server" />;
}
