import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-9-6-evo-servers');
}

export default function Xanteria96EvoServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-9-6-evo-servers" />;
}
