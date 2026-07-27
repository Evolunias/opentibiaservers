import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-14-retro-server');
}

export default function ZezeniaOnline14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-14-retro-server" />;
}
