import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-72-retro-server');
}

export default function Xanteria772RetroServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-72-retro-server" />;
}
