import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-10-0-retro-server');
}

export default function ZezeniaOnline100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-10-0-retro-server" />;
}
