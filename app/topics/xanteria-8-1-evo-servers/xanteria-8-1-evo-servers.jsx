import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-1-evo-servers');
}

export default function Xanteria81EvoServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-1-evo-servers" />;
}
