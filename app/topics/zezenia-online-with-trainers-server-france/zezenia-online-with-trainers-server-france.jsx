import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-with-trainers-server-france');
}

export default function ZezeniaOnlineWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-with-trainers-server-france" />;
}
