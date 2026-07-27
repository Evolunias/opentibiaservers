import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-54-retro-server');
}

export default function Xanteria854RetroServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-54-retro-server" />;
}
