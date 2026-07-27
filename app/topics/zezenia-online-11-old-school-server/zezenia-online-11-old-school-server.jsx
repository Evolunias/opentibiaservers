import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-11-old-school-server');
}

export default function ZezeniaOnline11OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-11-old-school-server" />;
}
