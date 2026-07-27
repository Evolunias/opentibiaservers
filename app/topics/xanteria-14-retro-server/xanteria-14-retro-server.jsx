import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-14-retro-server');
}

export default function Xanteria14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-14-retro-server" />;
}
