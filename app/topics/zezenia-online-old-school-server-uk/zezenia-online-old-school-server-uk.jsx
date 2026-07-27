import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-old-school-server-uk');
}

export default function ZezeniaOnlineOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-old-school-server-uk" />;
}
