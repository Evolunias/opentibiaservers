import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-retro-server-usa');
}

export default function ZezeniaOnlineRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-retro-server-usa" />;
}
