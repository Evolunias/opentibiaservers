import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-with-trainers-server-germany');
}

export default function ZezeniaOnlineWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-with-trainers-server-germany" />;
}
