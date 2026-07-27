import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-10-0-retro-server');
}

export default function Xanteria100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-10-0-retro-server" />;
}
