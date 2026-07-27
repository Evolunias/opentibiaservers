import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-old-school-server-poland');
}

export default function ZezeniaOnlineOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-old-school-server-poland" />;
}
