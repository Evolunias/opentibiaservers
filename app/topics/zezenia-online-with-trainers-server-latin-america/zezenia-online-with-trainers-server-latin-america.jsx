import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-with-trainers-server-latin-america');
}

export default function ZezeniaOnlineWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-with-trainers-server-latin-america" />;
}
