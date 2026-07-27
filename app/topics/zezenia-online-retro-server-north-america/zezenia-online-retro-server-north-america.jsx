import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-retro-server-north-america');
}

export default function ZezeniaOnlineRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-retro-server-north-america" />;
}
