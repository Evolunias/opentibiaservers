import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-6-evo-servers');
}

export default function Xanteria86EvoServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-6-evo-servers" />;
}
