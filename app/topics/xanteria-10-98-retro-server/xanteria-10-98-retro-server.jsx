import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-10-98-retro-server');
}

export default function Xanteria1098RetroServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-10-98-retro-server" />;
}
