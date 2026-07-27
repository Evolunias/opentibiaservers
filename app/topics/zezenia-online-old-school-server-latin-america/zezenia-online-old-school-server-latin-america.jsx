import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-old-school-server-latin-america');
}

export default function ZezeniaOnlineOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-old-school-server-latin-america" />;
}
