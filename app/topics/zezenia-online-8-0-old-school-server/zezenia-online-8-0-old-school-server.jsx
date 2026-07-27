import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-8-0-old-school-server');
}

export default function ZezeniaOnline80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-8-0-old-school-server" />;
}
