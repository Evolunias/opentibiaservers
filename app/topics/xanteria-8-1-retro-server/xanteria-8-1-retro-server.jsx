import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-1-retro-server');
}

export default function Xanteria81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-1-retro-server" />;
}
