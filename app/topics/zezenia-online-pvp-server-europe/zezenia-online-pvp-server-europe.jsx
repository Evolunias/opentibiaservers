import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvp-server-europe');
}

export default function ZezeniaOnlinePvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvp-server-europe" />;
}
