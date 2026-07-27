import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-retro-server-argentina');
}

export default function ZezeniaOnlineRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-retro-server-argentina" />;
}
