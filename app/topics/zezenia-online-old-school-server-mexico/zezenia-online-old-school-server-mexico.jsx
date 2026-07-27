import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-old-school-server-mexico');
}

export default function ZezeniaOnlineOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-old-school-server-mexico" />;
}
