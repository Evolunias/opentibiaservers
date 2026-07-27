import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-old-school-server-europe');
}

export default function ZezeniaOnlineOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-old-school-server-europe" />;
}
