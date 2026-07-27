import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-mexico-servers');
}

export default function XanteriaMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-mexico-servers" />;
}
