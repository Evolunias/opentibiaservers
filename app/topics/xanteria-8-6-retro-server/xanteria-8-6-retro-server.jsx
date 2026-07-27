import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-6-retro-server');
}

export default function Xanteria86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-6-retro-server" />;
}
