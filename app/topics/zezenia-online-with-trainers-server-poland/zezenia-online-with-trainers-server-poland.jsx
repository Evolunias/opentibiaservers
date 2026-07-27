import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-with-trainers-server-poland');
}

export default function ZezeniaOnlineWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-with-trainers-server-poland" />;
}
