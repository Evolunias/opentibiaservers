import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-9-6-retro-server');
}

export default function Xanteria96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-9-6-retro-server" />;
}
