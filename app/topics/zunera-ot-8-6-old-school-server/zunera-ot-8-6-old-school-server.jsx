import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-8-6-old-school-server');
}

export default function ZuneraOt86OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-8-6-old-school-server" />;
}
