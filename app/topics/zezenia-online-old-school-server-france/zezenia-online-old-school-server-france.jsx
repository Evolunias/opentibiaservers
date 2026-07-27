import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-old-school-server-france');
}

export default function ZezeniaOnlineOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-old-school-server-france" />;
}
