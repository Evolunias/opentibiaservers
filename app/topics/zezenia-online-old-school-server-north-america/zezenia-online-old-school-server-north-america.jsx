import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-old-school-server-north-america');
}

export default function ZezeniaOnlineOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-old-school-server-north-america" />;
}
