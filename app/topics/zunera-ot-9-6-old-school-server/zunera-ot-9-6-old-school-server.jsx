import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-9-6-old-school-server');
}

export default function ZuneraOt96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-9-6-old-school-server" />;
}
