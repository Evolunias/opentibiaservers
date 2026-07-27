import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-12-evo-servers');
}

export default function Xanteria12EvoServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-12-evo-servers" />;
}
