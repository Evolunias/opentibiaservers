import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-retro-server-europe');
}

export default function ZezeniaOnlineRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-retro-server-europe" />;
}
