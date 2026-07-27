import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-0-evo-servers');
}

export default function Xanteria80EvoServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-0-evo-servers" />;
}
