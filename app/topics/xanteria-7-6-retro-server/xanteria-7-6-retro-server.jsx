import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-6-retro-server');
}

export default function Xanteria76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-6-retro-server" />;
}
