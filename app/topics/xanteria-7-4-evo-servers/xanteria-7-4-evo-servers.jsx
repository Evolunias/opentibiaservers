import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-4-evo-servers');
}

export default function Xanteria74EvoServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-4-evo-servers" />;
}
