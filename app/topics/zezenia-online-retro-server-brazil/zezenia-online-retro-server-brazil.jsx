import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-retro-server-brazil');
}

export default function ZezeniaOnlineRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-retro-server-brazil" />;
}
